STEPS FOR SETUP

1. If docker is not installed, install it.
2. Run docker-compose up --build in the root directory.
3. Visit the app at localhost:8080! 


=====FOR DEV=====
1. docker-compose up --build
2. docker-compose stop web
3. cd web
4. npm run server-dev
5. npm run react-dev
*TODO: fix environment variables

=====DEPLOYMENT INSTRUCTIONS=====
1. Install the aws ecs cli https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_CLI_installation.html
2. Configure the aws ecs cli using your account details https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_CLI_Configuration.html
3. Install the aws cli https://docs.aws.amazon.com/cli/latest/userguide/installing.html
4. Configure the aws cli https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html#cli-quick-configuration
5. Run aws iam --region us-east-1 create-role --role-name ecsExecutionRole --assume-role-policy-document file://execution-assume-role.json
6. Run aws iam --region us-east-1 attach-role-policy --role-name ecsExecutionRole --policy-arn arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy
7. Run ecs-cli up
8. Run aws ec2 create-security-group --group-name "my-sg" --description "My security group" --vpc-id "VPC_ID", using the vpc id from the previous command
9. Run aws ec2 authorize-security-group-ingress --group-id "security_group_id" --protocol tcp --port 80 --cidr 0.0.0.0/0, using the security group id from the previous command
10. Change the ports of the web service in the docker-compose.yml from 8089:8089 to 80:80
11. Change the ecs-params.yml subnet IDs to the two subnets outputted by step 7, and the security group id to that of the output of step 8
12. Run docker-compose up --build to build all images
13. Run ecs-cli compose --file docker-compose.prod.yml --project-name magic-box service up  --create-log-groups