// eslint-disable-next-line arrow-body-style
const blogExists = async (req, res, next) => {
  // TODO: Validate whether blog exists or not

  /**
        * Validation steps.
        * 1. Check whether the blog exist or not using the blog service.
        * 2. If the blog does not exists send response as 404: Not Found.
        * 3. If the blog is found forward the request to the next middleware.
        */
  return next();
};

// eslint-disable-next-line arrow-body-style
const authenticateUserBlog = async (req, res, next) => {
  // TODO: Validate whether or not user owns the blog or not

  /**
    * Validation steps.
    * 1. Get the user id from the request object.
    * 2. Use blog service to check whether the user owns the blog or not.
    * 3. If the blog does not belong to user, return status as 401: Unauthorized Access.
    * 4. Otherwise forward the request to next middleware.
    */
  return next();
};

export {
  authenticateUserBlog,
  blogExists,
};
