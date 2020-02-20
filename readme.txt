This program is intended to make creating AR security tables easier.

1) Start with the sample security spreadsheet.
2) The first sheet "Group".  Add the names of the AD groups to the AD_Group_Name field and add the names of the AR Group GUIDS to the GUID field.
3) The second sheet is "Class".  Update the column headers to be all of the AD_Group_Names found on the "Group" sheet.  Add all of the possible RQL tables that are a part of the security model to the "Table" column.  Every AD Group that is allowed to see a table will get that table name in the intersection of the table row and the AD group column.
4) The last sheet is "Dimension".  Update the column headers to be all of the AD_Group_Names found as headers on "Class" sheet.  To the "field" column add the RQL field that is a part of the security model.  To the "Value" field add all of the values for that field that are a part of the security model.  For every AD Group that is allowed to see a dimensional value will get that value in the intersection of the table row and the AD group column.
5) Once the sheet is fully updated go to http://beautifytools.com/excel-to-json-converter.php and upload the excel file to get a JSON file.
6) Take that JSON file and replace the data.json that is a part of this project.
7) NPM Start and a file called security_table.csv should be created with the appropriate permissions.
8) Load this file to the security_table in the database.