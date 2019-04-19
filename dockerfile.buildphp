# Compile PHP with static linked dependencies
# to create a single running binary

# If things are not working, check the version below (2017.03.1.20170812)
# matches the lambda runtime specified here: 
# https://docs.aws.amazon.com/lambda/latest/dg/current-supported-versions.html

FROM amazonlinux:2017.03.1.20170812

ARG PHP_VERSION

RUN yum install \
    autoconf \
    automake \
    libtool \
    bison \
    re2c \
    libxml2-devel \
#    openssl-devel \
    libpng-devel \
    libjpeg-devel \
    curl-devel -y

# Install an older version of OpenSSL until Amazon updates the lambda image. 
RUN curl -sL http://www.openssl.org/source/openssl-1.0.1k.tar.gz | tar -zxv

WORKDIR /openssl-1.0.1k

RUN ./config
RUN make
RUN make install

WORKDIR /

RUN curl -sL https://github.com/php/php-src/archive/$PHP_VERSION.tar.gz | tar -zxv

WORKDIR /php-src-$PHP_VERSION

RUN ./buildconf --force

RUN ./configure \
    --enable-static=yes \
    --enable-shared=no \
    --disable-all \
    --enable-json \
    --enable-libxml \
    --enable-mbstring \
    --enable-phar \
    --enable-soap \
    --enable-xml \
    --with-curl \
    --with-gd \
    --with-zlib \
    --with-openssl \
    --without-pear

RUN make -j 5