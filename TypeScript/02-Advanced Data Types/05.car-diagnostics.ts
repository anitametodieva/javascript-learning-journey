interface CarBody {
    material: string;
    state: string;
}

interface Tire {
    airPressure: number;
    condition: string;
}

interface Engine {
    horsepower: number;
    oilDensity: number;
}

interface AdditionalProps {
    partName: "Engine" | "Tires" | "Car Body",
    runDiagnostics: () => string;
}

function runDiagnostics(this: { partName: string }): string {
    return this.partName;
}

function carDiagnostics(
    carBody: CarBody & AdditionalProps, 
    tires: Tire & AdditionalProps, 
    engine: Engine & AdditionalProps
) {
    console.log(carBody.runDiagnostics())
    console.log(tires.runDiagnostics())
    console.log(engine.runDiagnostics())
}

carDiagnostics({ material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics },

{ airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics },

{ horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics })