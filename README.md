## Clone the project
git clone https://github.com/zhairex24/rush-take-home-exam.git <project-folder>

## Go to project folder
cd <project-folder>

## Run composer install
composer install

## Run npm install
npm install

## Copy the .env.example 
cp .env.example .env

## Create your database then run migrations and seeder
php artisan migrate --seed

## Run php artisan commands
php artisan key:generate
php artisan config:cache
php artisan view:cache

## Run npm run dev
npm run dev

## Admin credentials
username: admin
email: admin@gmail.com
password: password