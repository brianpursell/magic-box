======SUMMARY======
The web container is split up into config, db,
dist, and src.
Config contains code related to AWS and Passport.
DB contains any queries and connection information related
to the db service.
Dist contains built & static code.
Src contains all of the remaining front end code.
The front end is organized primarily by routes.
At the top level of the src folder, the top level components such as
routes & auth & the navbar are contained. 
All components used within a route are contained within its named folder,
with the exception of shared components, which are in the Common folder.
This can be run with the instructions in the top level README, however, 
it has issues connecting to the db service. It must be set with environment
variables when npm start is run. 
Josh's sick gradients are in styles.scss.
The dist folder contains a number of icons, as well as the build of semantic.