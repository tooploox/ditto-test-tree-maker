ditto
test tree maker

For now you need to copy script to your repository and add lodash and glob to your devDependencies.
Script searches for any spec files ts/js in dir you put it in and in every subdir.

It creates treeTest txt file with tree of test in your directory.
By default, it searches for description, context and it. 

Enjoy !

Sample out:

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@<br />Generated Automatically through node script on <br />Thu Oct 08 2020 16:38:42 GMT+0200 (Central European Summer Time)<br />Idea is to make easier presentation for Cypress tests <br />Author: AJ <br />@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ <br />Tree of tests - legend: <br />between ##hash## you got test spec file<br />'--' describe of test  <br />'----' context  <br />'------>' single it test <br />@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ <br /> <br /><br />###########################<br />adminPanelAccessTests.spec.js<br />###########################<br />--Access to Admin Panel<br />----As admin<br />------> I can open admin panel<br />----As normal user<br />------> I don't see admin panel button<br /><br /><br />###########################<br />adminPanelUserPanelTests.spec.js<br />###########################<br />--Using 'Users' tab in Admin Panel<br />--As admin I can editing users in Admin Panel<br />----I can edit user's permissions<br />------> I can add permissions<br />------> I can remove permissions<br />----I can change user's days off limit<br />------> Limit value can't be empty<br />------> Limit value input doesn't accept non-number chars<br />------> I can change limit value<br />------> I can change user's contract type<br />------> I can change user's start work date<br />----As admin I can manage users in Admin Panel<br />------> I can create new user<br />------> I can archive user<br />------> I can restore user<br />------> I can add user as confirmed hire<br />----As admin I can use search and massive editing<br />------> I can find users<br />------> I can select founded users and edit them at once<br /><br /><br />###########################<br />availabilityTests.spec.js<br />###########################<br />--Availability<br />----Change availability<br />------> Changes availability to remote<br />------> Changes availability to off<br />----Check availability is visible<br />------> Search for users that works remote<br /><br /><br />
