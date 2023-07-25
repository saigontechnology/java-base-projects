db.createUser(
        {
            user: "javamongouser",
            pwd: "root",
            roles: [
                {
                    role: "readWrite",
                    db: "javamongo"
                }
            ]
        }
);