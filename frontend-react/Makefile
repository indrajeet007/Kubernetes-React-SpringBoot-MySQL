image-name="indrajit0072/frontend-poc:1.1.0"

build: 
	docker build -t $(image-name) .

run: 
	docker run -p 3000:80 -d $(image-name)

push:
	docker push $(image-name)
