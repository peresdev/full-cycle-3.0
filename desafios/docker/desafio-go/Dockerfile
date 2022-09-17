FROM golang:latest AS build
WORKDIR /build
COPY ./ ./
RUN go env -w GO111MODULE=off && go build -o ./main

FROM scratch
WORKDIR /app
COPY --from=build /build/main ./main
CMD ["./main"]
