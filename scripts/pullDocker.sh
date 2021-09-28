docker login -u ssunnu -p testtesttest
# pull docker image
if [ "$DEPLOYMENT_GROUP_NAME" == "dev" ]
then
docker-compose -f /deploy/docker-compose.dev.yml pull
elif [ "$DEPLOYMENT_GROUP_NAME" == "helltabus-codedeploy" ]
then
docker-compose -f /deploy/docker-compose.stage.yml pull
elif [ "$DEPLOYMENT_GROUP_NAME" == "production" ]
then
docker-compose -f /deploy/docker-compose.yml pull
fi