import React from "react";

const LocationMap = () => {
  return (
    <>
      <div className="location-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d56117.0814473785!2d13.393971737417758!3d52.47339815568858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sde!4v1772501540237!5m2!1sen!2sde"
          width={"100%"}
          height={400}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};

export default LocationMap;
