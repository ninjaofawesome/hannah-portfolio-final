'use strict';

var myportfolioApp = angular.module('myportfolioApp', []);
 
myportfolioApp.controller('HannahWorkCtrl', function ($scope) {
  $scope.jobs = [
	{	'name': 'Project Manager- Merchandise Allocation',
		'company': 'Nifty Thrifty',
		'date': 'November 2012-October 2013'},
	{	'name': 'Social Media Consultant',
		'company': 'Tuplet',
		'date': 'November 2012-September 2013'},
	{	'name': 'Hairdresser',
		'company': 'Soon Beauty Lab',
		'date': 'September 2008-November 2012'},
	{	'name': 'Freelance Technical Designer',
		'company': 'Self Employed',
		'date': 'June 2002-September 2008'}
  ];
});

myportfolioApp.controller('HannahProjectsCtrl', function ($scope) {
  $scope.projects = [
	{	'id': 'a',
		'number': 1,
		'hide': 'alpha',
		'name': 'Techway NY LLC',
		'date': 'March 2014',
		'description': 'Rails CMS Project',
		'link': 'http://techwayllcny.com/'},
	{	'id': 'b',
		'number': 2,
		'hide': 'beta',
		'name': 'The Great Oracle',
		'date': 'December 2013',
		'description': 'Sinatra Ruby Project',
		'link': 'http://great-oracle.herokuapp.com/'},
	{	'id': 'c',
		'number': 3,
		'hide': 'gamma',
		'name': 'Airport',
		'date': 'November 2013',
		'description': 'Ruby Command Line Project',
		'link': 'https://github.com/ninjaofawesome/airport'},
	{	'id': 'd',
		'number': 4,
		'hide': 'delta',
		'name': 'Amy Van Doran',
		'date': 'June 2012',
		'description': 'Static Website using Foundation CSS',
		'link': 'http://amyvandoran.com/'}
  ];
});