# data_visualization

[environment]
docker image : python3.8

[command]
# set up node
apt-get update
apt-get install nodejs
apt-get install npm
update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10

# create app
create-react-app ./