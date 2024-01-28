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
	behavior: behaviors.POWDER,
	category: "land",
	state: "solid",
	reactions: {
        "human": { elem1: "blood", elem2: "blood" },
    },
};
