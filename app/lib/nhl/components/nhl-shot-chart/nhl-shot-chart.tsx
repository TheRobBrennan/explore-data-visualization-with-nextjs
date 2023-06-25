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
  if (!shots || shots.length === 0) return null;

  const svgRef = useRef<SVGSVGElement>(null);

  // All distances are in FT from https://github.com/war-on-ice/icerink/blob/master/assets/js/rinkPlot.js
  const RINK_CONFIG =
  {
    RINK_LENGTH: 200,
    RINK_WIDTH: 85,
    BLUE_LINE_WIDTH: 1,
    BOARDS_RADIUS: 28,
    RED_TO_BOARDS: 11,
    RED_TO_FACEOFF: 20,
    FACEOFF_RADIUS: 15,
    FACEOFF_DOT_RADIUS: 1,
    ZONE_LINE_WIDTH: (2 / 12),
    CREASE_RADIUS: 6,
    ZONE_LENGTH: 75,
    ZONE_TO_NEUTRAL_DOT: 5,
    CENTER_TO_NEUTRAL_DOT: 22,
    REF_CREASE_RADIUS: 10,
    CREASE_HEIGHT: 4,
    FACEOFF_HOR_LENGTH: 3,
    FACEOFF_VER_LENGTH: 4,
    FACEOFF_HOR_DIST_CEN: 2,
    FACEOFF_VER_DIST_CEN: (9 / 12),
    FACEOFF_OUT_MARK_LENGTH: 2,
    FACEOFF_OUT_MARK_DIST_BW: 5 + (7 / 12),
    TRAPEZOID_TOP: 22,
    TRAPEZOID_BOTTOM: 28
  };

  useEffect(() => {
    const svg = d3.select<SVGSVGElement, unknown>(svgRef.current);

    // Clear any existing elements in the SVG
    svg.selectAll('*').remove();

    // Calculate the center point and padding
    const svgWidth = svgRef.current?.clientWidth || 0;
    const svgHeight = svgRef.current?.clientHeight || 0;
    const padding = 30;

    // Calculate scales for x and y values with padding
    // See https://us.v-cdn.net/6030995/uploads/lithium_attachments/2345i9C9ED39EA4669452.jpg for a great visualization overlaid on a hockey rink
    const xMin = -100
    const xMax = 100
    const yMin = -42.5
    const yMax = 42.5

    const scaleX = d3.scaleLinear().domain([xMin, xMax]).range([padding, svgWidth - padding]);
    const scaleY = d3.scaleLinear().domain([yMin, yMax]).range([svgHeight - padding, padding]);

    // Create markings on the ice - See https://github.com/war-on-ice/icerink/blob/master/assets/js/rinkPlot.js for a D3 example from 8 years ago

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
    <div>
      <svg ref={svgRef} width="100%" height="100%"></svg>
      <pre>{JSON.stringify(shots)}</pre>
    </div>
  );
}
