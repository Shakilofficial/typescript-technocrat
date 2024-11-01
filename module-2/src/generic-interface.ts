
{
  // Generics-Interface

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseDate: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type MIWatch = {
    brand: string;
    model: string;
    display: string;
  };

  type AppleWatch = {
    brand: string;
    model: string;
    sensor: boolean;
    cable: boolean;
  };

  interface RoyalEnfield {
    name: string;
    engine: string;
  }

  const jrDeveloper: Developer<MIWatch> = {
    name: "John",
    computer: {
      brand: "Asus",
      model: "Zenbook",
      releaseDate: 2023,
    },
    smartWatch: {
      brand: "MI",
      model: "Mi Watch",
      display: "OLED",
    },
  };

  const srDeveloper: Developer<AppleWatch, RoyalEnfield> = {
    name: "Sarah",
    computer: {
      brand: "Apple",
      model: "MacBook Pro",
      releaseDate: 2023,
    },
    smartWatch: {
      brand: "Apple",
      model: "Apple Watch",
      sensor: true,
      cable: true,
    },
    bike: {
      name: "Royal Enfield",
      engine: "2000cc",
    },
  };
}
