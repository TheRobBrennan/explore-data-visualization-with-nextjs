"use client"
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export interface NHLShotChartProps {
  shots: NHLShot[];
}

export interface NHLShot {
  x: number;
  y: number;
}

export default function NHLShotChart({ shots }: NHLShotChartProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  if (!shots || shots.length === 0) return null;

  useEffect(() => {
    const svg = d3.select<SVGSVGElement, unknown>(svgRef.current);

    // Clear any existing elements in the SVG
    svg.selectAll('*').remove();

    // Calculate the center point and padding
    const svgWidth = svgRef.current?.clientWidth || 0;
    const svgHeight = svgRef.current?.clientHeight || 0;
    const padding = 30;

    // Calculate scales for x and y values with padding
    const xMin = d3.min(shots, d => d.x) || 0;
    const xMax = d3.max(shots, d => d.x) || 0;
    const yMin = d3.min(shots, d => d.y) || 0;
    const yMax = d3.max(shots, d => d.y) || 0;

    const scaleX = d3.scaleLinear().domain([xMin, xMax]).range([padding, svgWidth - padding]);
    const scaleY = d3.scaleLinear().domain([yMin, yMax]).range([svgHeight - padding, padding]);

    // Create groups for each shot
    const shotGroups = svg
      .selectAll<SVGGElement, NHLShot>('g')
      .data(shots)
      .enter()
      .append('g')
      .attr('transform', d => `translate(${scaleX(d.x)},${scaleY(d.y)})`);

    // Create circles for each shot
    shotGroups.append('circle').attr('r', 5).attr('fill', 'red');

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
        // @ts-ignore
        d3.select(this).select('circle').attr('r', 8); // Increase circle size on hover
        // @ts-ignore
        d3.select(this).select('text').style('opacity', 1); // Show the text
      })
      .on('mouseout', function () {
        // @ts-ignore
        d3.select(this).select('circle').attr('r', 5); // Restore circle size
        // @ts-ignore
        d3.select(this).select('text').style('opacity', 0); // Hide the text
      });
  }, [shots]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <svg ref={svgRef} width="100%" height="100%"></svg>
      <pre>{JSON.stringify(shots)}</pre>
    </div>
  );
}
