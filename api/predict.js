
module.exports = function() {

  exports.regression = function(callback) {

    var featureSet = [
     [1, 200, 55, 0.0001],
     [1, 103, 51, 0.0021],
     [2, 20, 65, 0.000224444444],
     [1, 18, 45, 0.0031],
     [1, 22, 50, 0.01]
    ];

    var resultSet = [84.23, 31.2, 32.111, 35.5, 45];

    julia.exec('linreg', featureSet, resultSet, function(coefficients) {

      julia.exec('r2_total', featureSet, resultSet, coefficients, function(r_squared) {

        // get the data organized for scatter plot
        var numRuns = featureSet.length;
        var database_runs = [];
        for (var x = 0; x < numRuns; x++) {
          //second feature is database size
          database_runs.push([(featureSet[x])[1], resultSet[x]]);
        }

        callback(null, {
          featureSet: featureSet,
          resultSet: resultSet,
          coefficients: coefficients,
          r_squared: r_squared,
          database_runs: database_runs
        });
      });
    });

  }

  return exports;
}
