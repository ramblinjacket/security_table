const fs = require('fs');
const toCSV = require('array-to-csv')

var data = require('./data.json')

var groups = data.Group
var classes = data.Class
var dimensions = data.Dimension

var securityTable = [["group_id","metric_rql_name","class_rql_name","dim_rql_name","dim_value"]]

groups.forEach(group => {
	var adGroupName = group.AD_Group_Name
	var guid = group.GUID
	classes.forEach(table => {
		if (adGroupName in table) {
			var factTable = table.Table
			dimensions.forEach(dimension => {
				if (adGroupName in dimension) {
					var dimensionField = dimension.Field
					var dimensionValue = dimension.Value
					securityTable.push([guid,"",factTable,dimensionField,dimensionValue])
				}				
			});	
		}
	});
});

fs.writeFile("./security_table.csv", toCSV(securityTable), function(err) {
	if(err) {
			return console.log(err);
	}
	console.log("The file was saved to security_table.csv!");
}); 
