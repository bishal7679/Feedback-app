# Getting Started with this project

[![Deploy to AWS ECS](https://github.com/bishal7679/Feedback-app/actions/workflows/aws.yml/badge.svg?branch=main)](https://github.com/bishal7679/Feedback-app/actions/workflows/aws.yml/badge.svg?branch=main)

## Check the image that verified or not

```bash
cosign verify --key cosign.pub docker.io/bishal7679/feedback-app:latest | jq .
```
![Jan-01-00-26](https://user-images.githubusercontent.com/70086051/210181848-c8483826-0ed5-47b9-9876-00bdda6b749d.png)

Now Image is verified ✅

## Run the Image inside Container
```bash
docker pull docker.io/bishal7679/feedback-app:latest

```
```bash
docker run -dp 3000:3000 feedback-app:latest
```

Now application is running & you can access it on http://localhost:3000/
