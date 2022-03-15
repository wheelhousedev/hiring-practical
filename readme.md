## Welcome to our Hiring Practical!

# Getting Started

1. Ensure you have Docker Installed [Get Docker](https://docs.docker.com/get-docker/)
2. Grab our Test Stack
3. Clone our Test Stack to Local `git clone git@github.com:wheelhousedev/hiring-practical.git`
4. Stand-Up Wordpress `docker-compose up`
5. Get the Name of your Container `docker ps`
6. Copy Child Theme to Docker `docker cp  YOUR-PATH/wp-content/themes/twentytwentyone-child YOUR-CONTAINER-NAME:/bitnami/wordpress/wp-content/themes/.`
7. Use the above command to copy local files to the docker as you edit them. Or review Docker documentation to setup a file-system sync.
8. Enable your new Child Theme in the Admin:  [http://localhost/wp-admin](http://localhost/wp-admin)
    - Username: candidate
    - Password: ThankYouFor@YourInterest!
9. Navigate to [https://localhost/](https://localhost/) and follow the remaining instructions!
10. When you find the Analytics instructions: Please create your own GTM and GA container for the exercise.
11. Please review your final product placing yourself in the role of the client. Is there anything you would improve?
12. Once your complete reach out for a review with Dustin!
