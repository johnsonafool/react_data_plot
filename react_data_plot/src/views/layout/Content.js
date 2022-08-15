import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

import {
  Route,
  Routes
} from "react-router-dom";

import ColumnChartwithIndexlabel from "../overview/Column Chart with Indexlabel";
import ChartWithCrosshair from "../overview/Chart with Crosshair";
import ChartWithZoom from "../overview/Chart with Zoom";
import AnimatedChart from "../overview/Animated Chart";
import MultiseriesChart from "../overview/Multiseries Chart";
import MultipleAxisChart from "../overview/Multiple Axis Chart";
import ChartWithScaleBreaks from "../overview/Chart with Scale Breaks";
import ChartWithLogarithmicAxis from "../overview/Chart with Logarithmic Axis";
import PerformanceDemo from "../overview/Performance Demo";
import ChartWithDrillDown from "../overview/Chart with Drilldown";

import LineChart from "../line charts/Line Chart";
import SplineChart from "../line charts/Spline Chart";
import StepLineChart from "../line charts/Step Line Chart";

import AreaChart from "../area charts/Area Chart";
import MultiSeriesAreaChart from "../area charts/Multi Series Area Chart";
import SplineAreaChart from "../area charts/Spline Area Chart";
import StepAreaChart from "../area charts/Step Area Chart";
import RangeAreaChart from "../area charts/Range Area Chart";
import RangeSplineAreaChart from "../area charts/Range Spline Area Chart";
import StackedAreaChart from "../area charts/Stacked Area Chart";
import StackedArea100Chart from "../area charts/Stacked Area 100 Chart";

import ColumnChart from "../column charts/Column Chart";
import BarChart from "../column charts/Bar Chart";
import RangeColumnChart from "../column charts/Range Column Chart";
import StackedColumnChart from "../column charts/Stacked Column Chart";
import StackedColumn100Chart from "../column charts/Stacked Column 100 Chart";
import RangeBarChart from "../column charts/Range Bar Chart";
import StackedBarChart from "../column charts/Stacked Bar Chart";
import StackedBar100Chart from "../column charts/Stacked Bar 100 Chart";
import WaterfallChart from "../column charts/Waterfall Chart";

import PieChart from "../pie & funnel charts/Pie Chart";
import PieChartWithCustomization from "../pie & funnel charts/Pie Chart with Customization";
import DoughnutChart from "../pie & funnel charts/Doughnut Chart";
import FunnelChart from "../pie & funnel charts/Funnel Chart";
import FunnelChartWithCustomNeck from "../pie & funnel charts/Funnel Chart with Custom Neck";
import PyramidChart from "../pie & funnel charts/Pyramid Chart";

import CandlestickChart from "../financial charts/Candlestick Chart";
import OhlcChart from "../financial charts/OHLC Chart";

import ScatterChart from "../scatter & bubble charts/Scatter Chart";
import ScatterChartWithCustomMarkers from "../scatter & bubble charts/Scatter Chart with Custom Markers";
import BubbleChart from "../scatter & bubble charts/Bubble Chart";

import BoxAndWhiskerChart from "../box & whisker charts/Box & Whisker Chart";
import BoxAndWhiskerChartWithCustomization from "../box & whisker charts/Box & Whisker Chart with Customization";

import ErrorChart from "../combination charts/Error Chart";
import ErrorLineChart from "../combination charts/Error Line Chart";
import ParetoChart from "../combination charts/Pareto Chart";
import ColumnLineAreaChart from "../combination charts/Column Line Area Chart";

import DynamicLineChart from "../dynamic charts/Dynamic Line Chart";
import DynamicColumnChart from "../dynamic charts/Dynamic Column Chart";
import DynamicMultiSeriesChart from "../dynamic charts/Dynamic Multi Series Chart";

import NumericAxisStockChart from "../stockchart/StockChart with Numeric Axis";
import DateTimeAxisStockChart from "../stockchart/StockChart with Date-Time Axis";
import StockChartWithRangeSelector from "../stockchart/StockChart with Range Selector";


class Content extends Component {
  
  render() {    
    return (
		<>					
            <div className="content">
                <Routes>
                    <Route path="/" element={<ColumnChart/>}/>
                    <Route path="/chart-with-index-label" element={<ColumnChartwithIndexlabel/>}/>
                    <Route path="/chart-with-crosshair" element={<ChartWithCrosshair/>}/>
                    <Route path="/chart-zoom-pan" element={<ChartWithZoom/>}/>
                    <Route path="/animated-chart" element={<AnimatedChart/>}/>
                    <Route path="/multiseries-chart" element={<MultiseriesChart/>}/>
                    <Route path="/chart-with-multiple-axes" element={<MultipleAxisChart/>}/>
                    <Route path="/chart-axis-scale-break" element={<ChartWithScaleBreaks/>}/>
                    <Route path="/chart-with-logarithmic-axis" element={<ChartWithLogarithmicAxis/>}/>
                    <Route path="/performance-demo-chart" element={<PerformanceDemo/>}/>
                    <Route path="/drilldown-chart" element={<ChartWithDrillDown/>}/>
                    
                    <Route path="/line-chart" element={<LineChart/>}/>
                    <Route path="/spline-chart" element={<SplineChart/>}/>
                    <Route path="/step-line-chart" element={<StepLineChart/>}/>
                    
                    <Route path="/area-chart" element={<AreaChart/>}/>
                    <Route path="/multi-series-area-chart" element={<MultiSeriesAreaChart/>}/>
                    <Route path="/spline-area-chart" element={<SplineAreaChart/>}/>
                    <Route path="/step-area-chart" element={<StepAreaChart/>}/>
                    <Route path="/range-area-chart" element={<RangeAreaChart/>}/>
                    <Route path="/range-spline-area-chart" element={<RangeSplineAreaChart/>}/>
                    <Route path="/stacked-area-chart" element={<StackedAreaChart/>}/>
                    <Route path="/stacked-area-100-chart" element={<StackedArea100Chart/>}/>
                    
                    <Route path="/column-chart" element={<ColumnChart/>}/>
                    <Route path="/bar-chart" element={<BarChart/>}/>
                    <Route path="/range-column-chart" element={<RangeColumnChart/>}/>
                    <Route path="/stacked-column-chart" element={<StackedColumnChart/>}/>
                    <Route path="/stacked-column-100-chart" element={<StackedColumn100Chart/>}/>
                    <Route path="/range-bar-chart" element={<RangeBarChart/>}/>
                    <Route path="/stacked-bar-chart" element={<StackedBarChart/>}/>
                    <Route path="/stacked-bar-100-chart" element={<StackedBar100Chart/>}/>
                    <Route path="/waterfall-chart" element={<WaterfallChart/>}/>
                    
                    <Route path="/pie-chart" element={<PieChart/>}/>
                    <Route path="/pie-chart-index-label" element={<PieChartWithCustomization/>}/>
                    <Route path="/doughnut-chart" element={<DoughnutChart/>}/>
                    <Route path="/funnel-chart" element={<FunnelChart/>}/>
                    <Route path="/funnel-chart-with-custom-neck" element={<FunnelChartWithCustomNeck/>}/>
                    <Route path="/pyramid-chart" element={<PyramidChart/>}/>
                    
                    <Route path="/candlestick-chart" element={<CandlestickChart/>}/>
                    <Route path="/ohlc-chart" element={<OhlcChart/>}/>
                    
                    <Route path="/scatter-chart" element={<ScatterChart/>}/>
                    <Route path="/scatter-chart-with-custom-marker" element={<ScatterChartWithCustomMarkers/>}/>
                    <Route path="/bubble-chart" element={<BubbleChart/>}/>
                    
                    <Route path="/box-whisker-chart" element={<BoxAndWhiskerChart/>}/>
                    <Route path="/box-whisker-chart-with-customization" element={<BoxAndWhiskerChartWithCustomization/>}/>
                    
                    <Route path="/error-chart" element={<ErrorChart/>}/>
                    <Route path="/error-line-chart" element={<ErrorLineChart/>}/>
                    <Route path="/pareto-chart" element={<ParetoChart/>}/>
                    <Route path="/column-line-area-chart" element={<ColumnLineAreaChart/>}/>
                    
                    <Route path="/dynamic-line-chart" element={<DynamicLineChart/>}/>
                    <Route path="/dynamic-column-chart" element={<DynamicColumnChart/>}/>
                    <Route path="/dynamic-multi-series-chart" element={<DynamicMultiSeriesChart/>}/>

                    <Route path="/stockchart-numeric-axis" element={<NumericAxisStockChart/>}/>
                    <Route path="/stockchart-date-time-axis" element={<DateTimeAxisStockChart/>}/>
                    <Route path="/spline-area-stockchart-range-selector" element={<StockChartWithRangeSelector/>}/>
                    
                </Routes>
            </div>
        </>
    );
  }
}

export default Content;