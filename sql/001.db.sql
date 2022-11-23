create database spaza_suggest;
create role zuggs login password 'suggest123';
grant all privileges on database spaza_suggest to zuggs;

sudo -u postgres createdb spaza_suggest;
sudo -u postgres cresteuser zuggs -P;
password 'suggest123';


sudo -u postgres createdb spaza_tests;
sudo -u postgres cresteuser zugga -P;