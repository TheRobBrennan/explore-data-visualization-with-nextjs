"use client"
import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

export interface NHLShotChartProps {
  shots: NHLShot[];
}

export interface NHLShot {
  x: number;
  y: number;
}

export default function NHLShotChart({ shots }: NHLShotChartProps) {
  if (!shots || shots.length === 0) return null;

  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const handleResize = () => {
    // @ts-ignore
    const { clientWidth, clientHeight } = containerRef.current;
    console.log(`Setting container size to ${clientWidth} x ${clientHeight}`)
    setContainerSize({ width: clientWidth, height: clientHeight });
  };

  useEffect(() => {
    // @ts-ignore
    const svg = d3.select<SVGSVGElement, unknown>(svgRef.current);

    // Clear any existing elements in the SVG
    svg.selectAll('*').remove();

    // Calculate the center point and padding
    const svgWidth = containerSize.width;
    const svgHeight = containerSize.height;
    const padding = 30;

    // Calculate scales for x and y values with padding
    const xMin = -100;
    const xMax = 100;
    const yMin = -42.5;
    const yMax = 42.5;

    const scaleX = d3.scaleLinear().domain([xMin, xMax]).range([padding, svgWidth - padding]);
    const scaleY = d3.scaleLinear().domain([yMin, yMax]).range([svgHeight - padding, padding]);

    // Create markings on the ice

    // Create groups for each shot
    const shotGroups = svg
      .selectAll<SVGGElement, NHLShot>('g')
      .data(shots)
      .enter()
      .append('g')
      .attr('transform', d => `translate(${scaleX(d.x)},${scaleY(d.y)})`);

    // Create circles for each shot
    shotGroups.append('circle').attr('r', 5).attr('fill', 'green');

    // Add text elements for each shot (initially hidden)
    shotGroups
      .append('text')
      .text((d: NHLShot) => `(${d.x}, ${d.y})`)
      .attr('text-anchor', 'middle')
      .attr('dy', -10)
      .attr('font-size', 12)
      .attr('fill', 'black')
      .style('opacity', 0); // Use opacity to show/hide text

    // Show text on mouseover
    shotGroups
      .on('mouseover', function () {
        d3.select(this).select('circle').attr('r', 8); // Increase circle size on hover
        d3.select(this).select('text').style('opacity', 1); // Show the text
      })
      .on('mouseout', function () {
        d3.select(this).select('circle').attr('r', 5); // Restore circle size
        d3.select(this).select('text').style('opacity', 0); // Hide the text
      });
  }, [shots, containerSize]);

  useEffect(() => {
    // Initial size calculation
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <h2>Shot chart with mock data</h2>
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: 0,
          paddingBottom: '44.98%', // Maintain the aspect ratio (387 / 861 * 100) to avoid distortion
          position: 'relative',
          backgroundImage: 'url(/horizontal-rink-861x387.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <svg
          ref={svgRef}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          width={containerSize.width}
          height={containerSize.height}
        />
      </div>
    </>
  );
}
