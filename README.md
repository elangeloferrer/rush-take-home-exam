# create new laravel project
composer create-project laravel/laravel:^8.0 rush-take-home-exam

# go to the project directory
cd rush-take-home-exam

# install/update composer dependencies
composer install

# install Vue and its dependencies 
install vue@2.x.x or npm install vue
npm install vue-loader@^15.9.8
npm install @vue/compiler-sfc
npm install vue-router@3
npm install
npm run dev

# install laravel/ui
composer require laravel/ui
php artisan ui bootstrap --auth

# create your database on your local machine

# setup the environment
# copy the .env.example
# do not forget to put your database name in the DB_DATABASE variable
cp .env.example .env

# run the database migrations and seeder
php artisan migrate --seed



