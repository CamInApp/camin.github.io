FROM yunnysunny/gitbook:latest  AS build-stage

ARG BOOK_DIR=zh-cn
COPY ./.gitbook /opt
COPY ./${BOOK_DIR} /opt
RUN ls /opt -l
WORKDIR /opt/${BOOK_DIR}
RUN gitbook pdf . ../book.pdf

FROM scratch AS export-stage
COPY --from=build-stage /opt/book.pdf /
