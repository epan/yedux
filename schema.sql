DROP DATABASE IF EXISTS yedux;

CREATE DATABASE yedux;

USE yedux;

CREATE TABLE kanyes (
  id INT NOT NULL AUTO_INCREMENT,
  era VARCHAR(50),
  year INT(4),
  description TEXT,
  imageUrl VARCHAR(200),
  PRIMARY KEY (id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

INSERT INTO kanyes (era, year, description, imageUrl) VALUES ("College Dropout", 2004, "one of the all time best kanyes", "https://upload.wikimedia.org/wikipedia/en/a/a3/Kanyewest_collegedropout.jpg");
INSERT INTO kanyes (era, year, description, imageUrl) VALUES ("Late Registration", 2005, "pretty good honestly", "https://images.genius.com/2eb75c8a4d53e8782d8e37681871a9bf.1000x1000x1.jpg");
INSERT INTO kanyes (era, year, description, imageUrl) VALUES ("Graduation", 2007, "more electronic lol, andrew sherman vibes", "https://images.genius.com/b044109b1b3a38fd8d07499a7477f1f9.900x900x1.jpg");
INSERT INTO kanyes (era, year, description, imageUrl) VALUES ("808s & Heartbreak", 2008, "sad kanye, after his mum died :(", "https://images.rapgenius.com/680ca00f36d13c7d08fee5d3e882a5fb.1000x1000x1.jpg");
INSERT INTO kanyes (era, year, description, imageUrl) VALUES ("My Beautiful Dark Twisted Fantasy", 2010, "probably his best", "https://upload.wikimedia.org/wikipedia/en/b/be/MBDTF_ALT.jpg");
INSERT INTO kanyes (era, year, description, imageUrl) VALUES ("Yeezus", 2013, "hella grimey & aggressive lol, love it", "https://upload.wikimedia.org/wikipedia/en/0/03/Yeezus_album_cover.png");
INSERT INTO kanyes (era, year, description, imageUrl) VALUES ("The Life of Pablo", 2016, "W A V E Y", "http://ksassets.timeincuk.net/wp/uploads/sites/55/2016/02/Ca9XF0EWEAApIbG.jpg");
