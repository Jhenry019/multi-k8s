docker build -t jhdev96/multi-client:latest -t jhdev96/multi-client:$SHA -f ./frontend/Dockerfile ./frontend
docker build -t jhdev96/multi-server:latest -t jhdev96/multi-server:$SHA -f ./server/Dockerfile ./server
docker build -t jhdev96/multi-worker:latest -t jhdev96/multi-worker:$SHA -f ./worker/Dockerfile ./worker

docker push jhdev96/multi-client:latest
docker push jhdev96/multi-server:latest
docker push jhdev96/multi-worker:latest

docker push jhdev96/multi-client:$SHA
docker push jhdev96/multi-server:$SHA
docker push jhdev96/multi-worker:$SHA

kubectl apply -f k8s
kubectl set image deployments/server-deployment server=jhdev96/multi-server:$SHA
kubectl set image deployments/client-deployment frontend=jhdev96/multi-client:$SHA
kubectl set image deployments/worker-deployment worker=jhdev96/multi-worker:$SHA