DROP DATABASE IF EXISTS opentable;

CREATE DATABASE opentable;

USE opentable;

CREATE TABLE restaurant (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  description text,
  dining_style varchar(20),
  phone_number varchar(20) NOT NULL,
  website varchar(60),
  executive_chef varchar(40),
  address varchar(255) NOT NULL,
  neighborhood varchar(30) NOT NULL,
  parking_details varchar(255),
  events_promotions text,
  additional text,
  review_number int,
  average_star decimal(2,1),
  payments varchar(255),
  cuisines varchar(255),
  operation_hours text,
  PRIMARY KEY (id)
);








-- run mysql -u root < schema.sql

-- INSERT into restaurant (name,description,dining_style,phone_number,website,executive_chef,address,neighborhood,parking_details,events_promotions,additional,review_number,average_star,payments,cuisines,operation_hours) VALUES (	"	Cassin-Sanford	","	integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu	","	Puce	","	728-786-5048	","	http://mit.edu	","	Wilmar Anfosso	","	1436 Judy Street	","	NurmijÌ_rvi	","	blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus	","	quis lectus suspendisse potenti in eleifend quam a odio in hac	","	malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum	","	5531	","	3.2	","	nunc proin at turpis a	","	eget	","	praesent blandit nam nulla integer pede justo lacinia eget tincidunt	");
-- INSERT into restaurant (name,description,dining_style,phone_number,website,executive_chef,address,neighborhood,parking_details,events_promotions,additional,review_number,average_star,payments,cuisines,operation_hours) VALUES (	"	McCullough-Bogan	","	mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non	","	Goldenrod	","	524-663-3029	","	https://cmu.edu	","	Sybila Ramas	","	886 Bowman Avenue	","	Ikedach	","	nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et	","	praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla	","	id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at	","	5532	","	4.2	","	vel dapibus	","	tempus vivamus in felis eu	","	habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget	");



