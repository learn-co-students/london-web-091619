import React, { Fragment } from "react";

const Sushi = ({ id, name, img_url, price, handleClick, isEaten }) => {
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */

        isEaten ? null : (
          <img
            src={
              "https://res.cloudinary.com/teepublic/image/private/s--MePYtAyn--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1504614135/production/designs/1874224_1.jpg"
            }
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
};

export default Sushi;
