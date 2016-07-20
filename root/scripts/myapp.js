
var MainApp = React.createClass({
  render: function() {
    return (
      <div>
        <TitleBar
          mainTitle="MY APPLICATION"
          subTitle="SAMPLE PAGE"
        />
        <div className="row">
          <Table
            tableTitle="REVENUE BY ACQUISITION SOURCE"
            titleCol1="Source"
            titleCol2="Revenue"
          />
          <DoughnutChart chartTitle="DEVICE DISTRIBUITON"/>
        </div>
        <div className="row">
          <ProductGrid  gridTitle="TOP PRODUCTS"/>
      	</div>
      </div>
    );
  }
});




var TitleBar = React.createClass({
  render: function() {
    var redTab = {
      backgroundColor:"#DB1627",
      paddingBottom: 20,
      paddingTop: 20,
      paddingLeft:20
    };

    var greyTab = {
      backgroundColor:"#F1F1F1",
      paddingBottom:10,
      paddingTop:10,
      paddingLeft:20,
      textAlign:"left"
    };

    var textColor = {
      color:"white"
    };

    return (
      <div className="row">
        <div className="col-md-12" style={redTab}>
          <h4 style={textColor}>{this.props.mainTitle}</h4>
        </div>
        <div className="col-md-12" style={greyTab}>
          <h6>{this.props.subTitle}</h6>
        </div>
      </div>
    );
  }
});


var Table = React.createClass({
  render: function() {
    var revenueStyle = {
      paddingBottom:20,
      paddingTop:20,
      fontSize:18
    };

    var givenData = {
      "tableData" : [
        {
          "source": "FACEBOOK.COM",
          "revenue": "$6090"
        },
        {
          "source": "QUORA.COM",
          "revenue": "$3045"
        },
        {
          "source": "TWITTER.COM",
          "revenue": "$2284"
        },
        {
          "source": "EMAIL",
          "revenue": "$1675"
        },
        {
          "source": "ORGANIC",
          "revenue": "$1370"
        },
        {
          "source": "DIRECT",
          "revenue": "$1370"
        },
      ]
    }

    var sourceStyle = {
      paddingBottom:20,
      paddingTop:20
    };

    var rowStyle = {
      borderBottom: "3px solid white"
    };

    var bodyStyle = {
      backgroundColor:"#F5F5F5"
    };

    var headerStyle = {
      backgroundColor:"#F1F1F1",
      borderBottom: "3px solid white"
    }

    var setPaddingLeft = {
      paddingLeft:20
    }

    var setPaddingTop = {
      paddingTop:30
    }

    var setPaddingBottom = {
      paddingBottom:10
    }

    return (
      <div className="col-md-6" style={setPaddingLeft}>
        <div className="row">
          <div className="col-md-7" style={setPaddingTop}>
            <h6 style={setPaddingBottom}>{this.props.tableTitle}</h6>
            <table className="table">
            <thead style={headerStyle}>
              <tr>
                <th>{this.props.titleCol1}</th>
                <th>{this.props.titleCol2}</th>
              </tr>
            </thead>
            <tbody style={bodyStyle}>
            {
              givenData.tableData.map((item, index) => {
                return (<tr style={rowStyle}>
                  <td style={sourceStyle}>{item.source}</td>
                  <td style={revenueStyle}>{item.revenue}</td>
                </tr>);
              })
            }
            </tbody>
          </table>
          </div>
        </div>
      </div>
    );
  }
});


var DoughnutChart = React.createClass({

  componentDidMount () {
    this.createChart();
  },

  createChart: function () {
    var data = [
    {
    value: 49,
    color: "#FFB473",
    label: "MOBILE"
    }, {
    value: 35,
    color: "#8DCB96",
    label: "IPAD"
    }, {
    value: 16,
    color: "#FF7873",
    label: "DESKTOP"
    }];

    var options = {
    segmentShowStroke: true,
    scaleShowLabels: true,
    animateRotate: true,
    animateScale: false,
    percentageInnerCutout: 50,
    tooltipTemplate: "<%= value %>%"
    }

    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx).Doughnut(data, options);
    document.getElementById('js-legend').innerHTML = myChart.generateLegend();

  },

  render: function() {
    var setPaddingLeft = {
      paddingLeft:20
    }

    var setPaddingTop = {
      paddingTop:30
    }

    var setChartWidth = {
      width: "75%",
      height: "75%"
    }

    var canvasWidth = {
      width: "100%",
      height: "auto"
    }

    return (
      <div className="col-md-6" style={setPaddingLeft}>
        <div className="row">
          <div className="col-md-12" style={setPaddingTop}>
            <h6>{this.props.chartTitle}</h6>
            <div id="js-legend" className="chart-legend">
            </div>
            <div style={setChartWidth}>
              <canvas id="myChart" className="mycanvas" style={canvasWidth}></canvas>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


var ProductGrid = React.createClass({
  render: function() {
    var setPaddingLeft = {
      paddingLeft:20
    };

    var givenData = {
      "productData" : [
        {
          "view": "10989",
          "purchase":"8908",
          "conversion": "3.5%",
          "revenue":"$54274",
          "rank":"1",
          "productName": "TWISTED BOOTS",
          "status": "154 Views 2 Days Ago",
          "productImageUrl" : "./images/boot.jpg"
        },
        {
          "view": "10989",
          "purchase":"8908",
          "conversion": "3.5%",
          "revenue":"$54274",
          "rank":"2",
          "productName": "TWISTED BOOTS",
          "status": "154 Views 2 Days Ago",
          "productImageUrl" : "./images/boot.jpg"
        },
        {
          "view": "10989",
          "purchase":"8908",
          "conversion": "3.5%",
          "revenue":"$54274",
          "rank":"3",
          "productName": "TWISTED BOOTS",
          "status": "154 Views 2 Days Ago",
          "productImageUrl" : "./images/boot.jpg"
        },
        {
          "view": "10989",
          "purchase":"8908",
          "conversion": "3.5%",
          "revenue":"$54274",
          "rank":"4",
          "productName": "TWISTED BOOTS",
          "status": "154 Views 2 Days Ago",
          "productImageUrl" : "./images/boot.jpg"
        },

      ]
    }

    return (
      <div style={setPaddingLeft}>
        <div className="row">
          <div className="col-md-12" >
            <h5>
              {this.props.gridTitle}
            </h5>
          </div>
        </div>
        <div className="row">
        {
          givenData.productData.map((item, index) => {
            return (<ProductTile
                      productName={item.productName}
                      status={item.status}
                      productImageUrl={item.productImageUrl}
                      rank={item.rank}
                      view={item.view}
                      purchase={item.purchase}
                      revenue={item.revenue}
                      conversion={item.conversion}
                    />);
          })
        }
        </div>
      </div>
    );
  }
});


var ProductTile = React.createClass({
  render: function() {
    var setBorder = {
      border: "1px solid black",
      paddingBottom: 5,
      marginRight:30,
      marginLeft:20
    };

    var textColor = {
      color:"#DBDBDB"
    };

    var badgeStyle = {
      position: "absolute",
      left:15,
      top:15,
      textAlign: "center",
      paddingTop: 8,
      height: 40,
      width: 40,
      background: "#F1F1F1",
      fontSize: 20,
    };

    var labelStyle = {
      color:"#DBDBDB",
      border: 0,
    };

    var setPaddingLeft = {
      paddingLeft:20
    };


    var countStyle = {
      border: 0,
    }

    var arrowStyle = {
      textAlign:"center",
      border: 0,
      fontSize: 20
    }

    var setPosition = {
      position:"relative"
    }

    var setTileBackground = {
      backgroundImage: 'url(\'./images/tile-bg.png\')',
      borderTop:"1px solid #DBDBDB",
      height: 180
    }

    return (
      <div className="col-md-2" style={setBorder}>
        <div className="row">
          <div className="col-md-12">
            <div style={badgeStyle}>{this.props.rank}</div>
            <img  src={this.props.productImageUrl} width="200" height="300" />
            <h6 style={textColor}>{this.props.productName}</h6>
            <h6 style={textColor}>{this.props.status}</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" style={setTileBackground}>
            <table className="table">
              <tbody>
                <tr>
                  <td style={labelStyle}>View</td>
                  <td style={countStyle}>{this.props.view}</td>
                </tr>
                <tr>
                  <td style={labelStyle}>Purchase</td>
                  <td style={countStyle}>{this.props.purchase}</td>
                </tr>
                <tr>
                  <td style={labelStyle}>Conversions</td>
                  <td style={countStyle}>{this.props.conversion}</td>
                </tr>
                <tr>
                  <td style={labelStyle}>Revenues</td>
                  <td style={countStyle}>{this.props.revenue}</td>
                </tr>
              </tbody>
            </table>
            <div style={arrowStyle}>^</div>
          </div>
        </div>
      </div>
    );
  }
});



ReactDOM.render(
  <MainApp />,
  document.getElementById('content')
);
