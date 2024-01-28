/* Flowers And Forests
Created by Pixelegend4 and SquareScreamYT
*/

elements.nutmeg = {
	color: "#b86d42",
	behavior: behaviors.POWDER,
	category: "land",
	state: "solid",
        breakInto: “nutmeg_ground”,
};

elements.nutmeg_ground = {
	color: "#804d2f",
	behavior: behaviors.POWDER,
	category: "land",
	state: "solid",
};
elements.cactus = {
	color: "#35ff08",
	behavior: behaviors.SOLID,
	category: "land",
	state: "solid",
	reactions: {
        "human": { elem1: "blood", elem2: "blood" },
	"fly": { elem1: "blood", elem2: "blood" },
	"bee": { elem1: "honey", elem2: "honey" },
    },
};
elements.blue_cactus = {
	color: "#0033FF",
	behavior: behaviors.SOLID,
	category: "land",
	state: "solid",
	reactions: {
        "human": { elem1: "blood", elem2: "blood" },
	"fly": { elem1: "blood", elem2: "blood" },
	"bee": { elem1: "honey", elem2: "honey" },
    },
};
