import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';

import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  
  render() {    
    return (
		<>						
            <Nav to="/" className="flex-sm-column" id="sidebar">
                <ListGroup className="nav nav-sidebar flex-sm-column">
                    <ListGroup.Item>
                        <a href="#overview" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>OVERVIEW</span></a>
                    </ListGroup.Item>
                    <ListGroup>
                        <ListGroup className="sub-menu collapse" id="overview">
                            <ListGroup.Item> <NavLink to="/chart-with-index-label">Chart with Index / Data Label</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/chart-zoom-pan">Chart with Zooming / Panning</NavLink></ListGroup.Item>									
                            <ListGroup.Item> <NavLink to="/animated-chart">Chart with Animation</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/multiseries-chart">Multi Series Chart</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/chart-with-multiple-axes">Chart with Multiple Axes</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/chart-with-crosshair">Chart with Crosshair</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/chart-axis-scale-break">Chart with Scale Breaks</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/chart-with-logarithmic-axis">Chart with Logarithmic Axis</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/performance-demo-chart">Performance with 50,000 Data Points</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/drilldown-chart">Chart with Drilldown</NavLink></ListGroup.Item>
                        </ListGroup>
                    </ListGroup>
                    <ListGroup.Item role="separator" className="divider"></ListGroup.Item>
                    
                    <ListGroup.Item>
                        <a href="#lineCharts" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>LINE CHARTS</span></a>
                    </ListGroup.Item>
                    <ListGroup>
                        <ListGroup className="sub-menu collapse" id="lineCharts">
                            <ListGroup.Item> <NavLink to="/line-chart">Line Chart</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/spline-chart">Spline Chart</NavLink></ListGroup.Item>									
                            <ListGroup.Item> <NavLink to="/step-line-chart">Step Line Chart</NavLink></ListGroup.Item>
                        </ListGroup>
                    </ListGroup>
                    <ListGroup.Item role="separator" className="divider"></ListGroup.Item>

                    <ListGroup.Item>
                        <a href="#areaCharts" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>AREA CHARTS</span></a>
                    </ListGroup.Item>
                    <ListGroup>
                        <ListGroup className="sub-menu collapse" id="areaCharts">
                            <ListGroup.Item> <NavLink to="/area-chart">Area Chart</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/multi-series-area-chart">Multi Series Area Chart with Date Time Axis</NavLink></ListGroup.Item>									
                            <ListGroup.Item> <NavLink to="/spline-area-chart">Spline Area Chart</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/step-area-chart">Step Area Chart</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/range-area-chart">Range Area Chart</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/range-spline-area-chart">Range Spline Area Chart</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/stacked-area-chart">Stacked Area Chart</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/stacked-area-100-chart">Stacked Area 100% Chart</NavLink></ListGroup.Item>									
                        </ListGroup>
                    </ListGroup>
                    <ListGroup.Item role="separator" className="divider"></ListGroup.Item>
                    
                    <ListGroup.Item>
                        <a href="#columnCharts" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>COLUMN & BAR CHARTS</span></a>
                    </ListGroup.Item>
                    <ListGroup>
                        <ListGroup className="sub-menu collapse" id="columnCharts">
                            <ListGroup.Item> <NavLink to="/column-chart">Column Chart</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/bar-chart">Bar Chart</NavLink></ListGroup.Item>									
                            <ListGroup.Item> <NavLink to="/range-column-chart">Range Column Chart</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/stacked-column-chart">Stacked Column Chart</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/stacked-column-100-chart">Stacked Column 100% Chart</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/range-bar-chart">Range Bar Chart</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/stacked-bar-chart">Stacked Bar Chart</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/stacked-bar-100-chart">Stacked Bar 100% Chart</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/waterfall-chart">Waterfall Chart</NavLink></ListGroup.Item>
                        </ListGroup>
                    </ListGroup>
                    <ListGroup.Item role="separator" className="divider"></ListGroup.Item>
                    
                    <ListGroup.Item>
                        <a href="#pieCharts" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>PIE & FUNNEL CHARTS</span></a>
                    </ListGroup.Item>
                    <ListGroup>
                        <ListGroup className="sub-menu collapse" id="pieCharts">
                            <ListGroup.Item> <NavLink to="/pie-chart">Pie Chart</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/pie-chart-index-label">PIe Chart with Index Labels Placed Inside</NavLink></ListGroup.Item>									
                            <ListGroup.Item> <NavLink to="/doughnut-chart">Doughnut Chart</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/funnel-chart">Funnel Chart</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/funnel-chart-with-custom-neck">Funnel Chart with Custom Neck</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/pyramid-chart">Pyramid Chart</NavLink></ListGroup.Item>
                        </ListGroup>
                    </ListGroup>
                    <ListGroup.Item role="separator" className="divider"></ListGroup.Item>
                    
                    <ListGroup.Item>
                        <a href="#financialCharts" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>FINANCIAL CHARTS</span></a>
                    </ListGroup.Item>
                    <ListGroup>
                        <ListGroup className="sub-menu collapse" id="financialCharts">
                            <ListGroup.Item> <NavLink to="/candlestick-chart">Candlestick Chart</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/ohlc-chart">OHLC Chart</NavLink></ListGroup.Item>
                        </ListGroup>
                    </ListGroup>
                    <ListGroup.Item role="separator" className="divider"></ListGroup.Item>
                    
                    <ListGroup.Item>
                        <a href="#scatterCharts" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>SCATTER & BUBBLE CHARTS</span></a>
                    </ListGroup.Item>
                    <ListGroup>
                        <ListGroup className="sub-menu collapse" id="scatterCharts">
                            <ListGroup.Item> <NavLink to="/scatter-chart">Statter Chart</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/scatter-chart-with-custom-marker">Scatter Chart with Custom Marker</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/bubble-chart">Bubble Chart</NavLink></ListGroup.Item>
                        </ListGroup>
                    </ListGroup>
                    <ListGroup.Item role="separator" className="divider"></ListGroup.Item>
                    
                    <ListGroup.Item>
                        <a href="#boxAndWhiskerCharts" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>BOX & WHISKER CHARTS</span></a>
                    </ListGroup.Item>
                    <ListGroup>
                        <ListGroup className="sub-menu collapse" id="boxAndWhiskerCharts">
                            <ListGroup.Item> <NavLink to="/box-whisker-chart">Box & Whisker Chart</NavLink></ListGroup.Item>										
                            <ListGroup.Item> <NavLink to="/box-whisker-chart-with-customization">Box & Whisker Chart with Customization</NavLink></ListGroup.Item>
                        </ListGroup>
                    </ListGroup>
                    <ListGroup.Item role="separator" className="divider"></ListGroup.Item>
                    
                    <ListGroup.Item>
                        <a href="#combinationCharts" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>COMBINATION CHARTS</span></a>
                    </ListGroup.Item>
                    <ListGroup>
                        <ListGroup className="sub-menu collapse" id="combinationCharts">
                            <ListGroup.Item> <NavLink to="/error-chart">Error Chart</NavLink></ListGroup.Item>										
                            <ListGroup.Item> <NavLink to="/error-line-chart">Error Line Chart</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/pareto-chart">Pareto Chart</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/column-line-area-chart">Combination of Column, Line & Area Chart Chart</NavLink></ListGroup.Item>
                        </ListGroup>
                    </ListGroup>
                    <ListGroup.Item role="separator" className="divider"></ListGroup.Item>
                    
                    <ListGroup.Item>
                        <a href="#dynamicCharts" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>DYNAMIC CHARTS</span></a>
                    </ListGroup.Item>
                    <ListGroup>
                        <ListGroup className="sub-menu collapse" id="dynamicCharts">
                            <ListGroup.Item> <NavLink to="/dynamic-line-chart">Dynamic Line Chart</NavLink></ListGroup.Item>										
                            <ListGroup.Item> <NavLink to="/dynamic-column-chart">Dynamic Column Chart</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/dynamic-multi-series-chart">Dynamic Multi Series Chart</NavLink></ListGroup.Item>										
                        </ListGroup>
                    </ListGroup>
                    <ListGroup.Item role="separator" className="divider"></ListGroup.Item>

                    <ListGroup.Item>
                        <a href="#stockcharts" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>STOCKCHARTS</span></a>
                    </ListGroup.Item>
                    <ListGroup>
                        <ListGroup className="sub-menu collapse" id="stockcharts">
                            <ListGroup.Item> <NavLink to="/stockchart-numeric-axis">StockChart with Numeric Axis</NavLink></ListGroup.Item>										
                            <ListGroup.Item> <NavLink to="/stockchart-date-time-axis">StockChart with Date-Time Chart</NavLink></ListGroup.Item>
                            <ListGroup.Item> <NavLink to="/spline-area-stockchart-range-selector">StockChart with Range Selector</NavLink></ListGroup.Item>										
                        </ListGroup>
                    </ListGroup>
                    <ListGroup.Item role="separator" className="divider"></ListGroup.Item>
                    
                </ListGroup>
            </Nav>		
        </>
    );
  }
}

export default Sidebar;