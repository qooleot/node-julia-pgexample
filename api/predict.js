
module.exports = function() {

  exports.regression = function(callback) {

    var featureSet = [
     [1, 200, 55, 0.0001],
     [2, 20, 65, 0.000224444444],
     [1, 18, 45, 0.0031],
     [1, 22, 50, 0.01]
    ];

    var resultSet = [34.23, 81.2, 82.111, 85.5];

    julia.exec('linreg', featureSet, resultSet, function(coefficients) {
      console.log(coefficients);

      julia.exec('r2_total', featureSet, resultSet, coefficients, function(r_squared) {

        callback(null, {
          featureSet: featureSet,
          resultSet: resultSet,
          coefficients: coefficients,
          r_squared: r_squared
        });
      });
    });

  }

  return exports;
}
