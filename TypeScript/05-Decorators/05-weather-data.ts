interface Cache {
  lastChecked: Date | undefined;
  data: string[];
}

function cache() {
  let cache: Cache = {
    lastChecked: undefined,
    data: [],
  };

  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;

    descriptor.value = function () {
      const now = new Date();

      if (
        cache.lastChecked &&
        now.getTime() - cache.lastChecked.getTime() < 5000
      ) {
        console.log("Returned from cache");
        return cache.data;
      }

      const result = original.call(this);
      cache.data = [...result];
      cache.lastChecked = new Date();

      return result;
    };
  };
}

class MockWeatherDataService {
  private weatherData: string[] = [
    "Sunny 8° to 20°",
    "Partially Cloudy 7° to 19°",
    "Sunny 5° to 18°",
  ];

  addWeatherData(data: string) {
    this.weatherData.push(data);
  }
  @cache()
  getWeatherData() {
    return this.weatherData;
  }
}

let service = new MockWeatherDataService();
console.log(service.getWeatherData())
console.log(service.getWeatherData())
service.addWeatherData('Partially Cloudy 5° to 11°');
console.log(service.getWeatherData())

//7 seconds later
setTimeout(() => console.log(service.getWeatherData()), 7000);