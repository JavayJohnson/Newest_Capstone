
import React, { useState } from 'react';
import './BlackExcellenceTimeline.css';

const BlackExcellenceTimeline = () => {
  return (
    <div id="timeline" style={{ backgroundColor: '#000000', color: '#FFFFFF', padding: '30px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0, 255, 0, 0.5)', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
    <h2 style={{ color: '#00FF00', fontSize: '2.5rem', marginBottom: '20px', textShadow: '0 0 10px rgba(0, 255, 0, 0.7)' }}>
      Black Inventions and Patents in America
    </h2>
    <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
      <li style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#1a1a1a', borderRadius: '10px', borderLeft: '5px solid #FF0000', boxShadow: '0 4px 10px rgba(255, 0, 0, 0.5)' }}>
        1996 - The Late Honorable Rosa L. Parks, known as the mother of the civil rights movement, received a heartfelt "Thank you" from Javay Johnson. Rosa Parks led the Montgomery, Alabama bus boycott in 1955. I had the profoundly monumental privilege and the unforgettable experience of briefly sitting with a courageous Black woman of excellence, who carried the civil rights movement on her shoulders. Her spark, unbridled tenacity, and bravery became a major catalyst in the push for civil rights and the advancement of equality for people of color. In 1999, Parks was awarded the Congressional Gold Medal of Honor, the highest civilian honor in the United States. Rosa Parks, a historical icon who truly embodied Black Excellence, who is forever etched in history and infinitely defined by her courage and legacy.
      </li>
      <li style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#1a1a1a', borderRadius: '10px', borderLeft: '5px solid #FF0000', boxShadow: '0 4px 10px rgba(255, 0, 0, 0.5)' }}>
        1821 - Thomas L. Jennings receives the first patent for a dry cleaning process.
      </li>
      <li style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#1a1a1a', borderRadius: '10px', borderLeft: '5px solid #FF0000', boxShadow: '0 4px 10px rgba(255, 0, 0, 0.5)' }}>
        1872 - Elijah McCoy patents the automatic lubricator for steam engines.
      </li>
      <li style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#1a1a1a', borderRadius: '10px', borderLeft: '5px solid #FF0000', boxShadow: '0 4px 10px rgba(255, 0, 0, 0.5)' }}>
        1873 - Joseph Winters patents a fire escape ladder.
      </li>
      <li style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#1a1a1a', borderRadius: '10px', borderLeft: '5px solid #FF0000', boxShadow: '0 4px 10px rgba(255, 0, 0, 0.5)' }}>
        1881 - Lewis Latimer patents an improved carbon filament for the light bulb.
      </li>
      <li style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#1a1a1a', borderRadius: '10px', borderLeft: '5px solid #FF0000', boxShadow: '0 4px 10px rgba(255, 0, 0, 0.5)' }}>
        1885 - Sarah E. Goode patents the fold-away bed (cabinet bed).
      </li>
      <li style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#1a1a1a', borderRadius: '10px', borderLeft: '5px solid #FF0000', boxShadow: '0 4px 10px rgba(255, 0, 0, 0.5)' }}>
        1892 - Granville T. Woods patents an automatic air brake system for trains.
      </li>
      <li style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#1a1a1a', borderRadius: '10px', borderLeft: '5px solid #FF0000', boxShadow: '0 4px 10px rgba(255, 0, 0, 0.5)' }}>
        1899 - R. Johnson patents an improved bicycle frame.
      </li>
      <li style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#1a1a1a', borderRadius: '10px', borderLeft: '5px solid #FF0000', boxShadow: '0 4px 10px rgba(255, 0, 0, 0.5)' }}>
        1899 - Garrett Morgan patents a breathing device, later used as a gas mask.
      </li>
      <li style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#1a1a1a', borderRadius: '10px', borderLeft: '5px solid #FF0000', boxShadow: '0 4px 10px rgba(255, 0, 0, 0.5)' }}>
        1904 - George Washington Carver develops multiple agricultural products and patents them, including peanut butter.
      </li>
      <li style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#1a1a1a', borderRadius: '10px', borderLeft: '5px solid #FF0000', boxShadow: '0 4px 10px rgba(255, 0, 0, 0.5)' }}>
        1914 - Garrett Morgan patents the traffic light system.
      </li>
      <li style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#1a1a1a', borderRadius: '10px', borderLeft: '5px solid #FF0000', boxShadow: '0 4px 10px rgba(255, 0, 0, 0.5)' }}>
        1923 - Garrett Morgan patents the modern gas mask.
      </li>
      <li style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#1a1a1a', borderRadius: '10px', borderLeft: '5px solid #FF0000', boxShadow: '0 4px 10px rgba(255, 0, 0, 0.5)' }}>
        1928 - Frederick McKinley Jones patents the mobile refrigeration system, revolutionizing food transport.
      </li>
      <li style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#1a1a1a', borderRadius: '10px', borderLeft: '5px solid #FF0000', boxShadow: '0 4px 10px rgba(255, 0, 0, 0.5)' }}>
        1940 - George Crum invents the potato chip.
      </li>
      <li style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#1a1a1a', borderRadius: '10px', borderLeft: '5px solid #FF0000', boxShadow: '0 4px 10px rgba(255, 0, 0, 0.5)' }}>
        1953 - Bessie Blount Griffin patents a portable feeding device for amputees.
      </li>
      <li style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#1a1a1a', borderRadius: '10px', borderLeft: '5px solid #FF0000', boxShadow: '0 4px 10px rgba(255, 0, 0, 0.5)' }}>
        1966 - Marie Van Brittan Brown patents the first home security system. The first home security system of 1966 featured a series of peep holes and a camera that you could slide through one of the holes to monitor your home. Brittan Brown later added a microphone, a button to unlock the door and button to call the police.
      </li>
      <li style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#1a1a1a', borderRadius: '10px', borderLeft: '5px solid #FF0000', boxShadow: '0 4px 10px rgba(255, 0, 0, 0.5)' }}>
        1971 - James West co-invents the electric microphone.
      </li>
      <li style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#1a1a1a', borderRadius: '10px', borderLeft: '5px solid #FF0000', boxShadow: '0 4px 10px rgba(255, 0, 0, 0.5)' }}>
        1989 - Lonnie G. Johnson patents the Super Soaker water gun.
      </li>
      <li style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#1a1a1a', borderRadius: '10px', borderLeft: '5px solid #FF0000', boxShadow: '0 4px 10px rgba(255, 0, 0, 0.5)' }}>
        1992 - Patricia Bath patents the Laserphaco Probe for laser cataract surgery.
      </li>
      <li style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#1a1a1a', borderRadius: '10px', borderLeft: '5px solid #FF0000', boxShadow: '0 4px 10px rgba(255, 0, 0, 0.5)' }}>
        2003 - Marc Hannah co-develops 3D rendering technologies used in modern graphics.
      </li>
      <li style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#1a1a1a', borderRadius: '10px', borderLeft: '5px solid #FF0000', boxShadow: '0 4px 10px rgba(255, 0, 0, 0.5)' }}>
        2016 - Lisa Gelobter develops the Shockwave technology that influenced web animation tools like GIFs.
      </li>
    </ul>
  </div>
);
};

export default BlackExcellenceTimeline;