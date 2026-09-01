type FirstAndSecondFloorBase = 
{number: 1; train: () => void} 
| {number: 2; dine: () => void};

type FirstAndSecondFloor = FirstAndSecondFloorBase & 
({ hallway: "A"; pass?: "Guest" } | { hallway:"C" });

type ThirdFloor = {
    number: 3;
    hallway: "A" | "C";
    sleep: () => void;
};

type simplified = FirstAndSecondFloor | ThirdFloor

function visitFloor(floor: simplified) {
switch (floor.number) {
     case 1: 
        floor.train(); return;
     case 2: 
        floor.dine(); return;
     case 3: 
        floor.sleep(); return;
 }
}

visitFloor({ train() { }, number: 1, hallway: 'A', pass: 'Guest' });
visitFloor({ dine() { }, number: 2, hallway: 'A' });
visitFloor({ sleep() { }, number: 3, hallway: 'C' });
visitFloor({ train() { }, number: 1, hallway: 'C' });
visitFloor({ train() { }, number: 1, hallway: 'A' });
visitFloor({ dine() { }, number: 2, hallway: 'A', pass: 'Guest' });
visitFloor({ sleep() { }, number: 3, hallway: 'A' });
visitFloor({ dine() { }, number: 2, hallway: 'C' });

