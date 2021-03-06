export const toggleDayActive = (num, fun) => {
  switch (num) {
    case 1:
      fun({
        monday: true,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
        employees: false,
        users: false,
      });
      break;
    case 2:
      fun({
        monday: false,
        tuesday: true,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
        employees: false,
        users: false,
      });
      break;
    case 3:
      fun({
        monday: false,
        tuesday: false,
        wednesday: true,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
        employees: false,
        users: false,
      });
      break;
    case 4:
      fun({
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: true,
        friday: false,
        saturday: false,
        sunday: false,
        employees: false,
        users: false,
      });
      break;
    case 5:
      fun({
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: true,
        saturday: false,
        sunday: false,
        employees: false,
        users: false,
      });
      break;
    case 6:
      fun({
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: true,
        sunday: false,
        employees: false,
        users: false,
      });
      break;
    case 7:
      fun({
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: true,
        employees: false,
        users: false,
      });
      break;
    case 8:
      fun({
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
        employees: true,
        users: false,
      });
      break;
    case 9:
      fun({
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
        employees: false,
        users: true,
      });
      break;
    default:
      fun({
        monday: true,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
        employees: false,
        users: false,
      });
  }
};
