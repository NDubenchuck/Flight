// const utils = require ('./scripts/functions');

document.getElementById("firstLine").addEventListener("input", fullLIne);
document.getElementById("firstName").addEventListener("input", myFunction1);
    document.getElementById("secondName").addEventListener("input", myFunction2);
    document.getElementById("paxPasport").addEventListener("input", paxPasport);
    document.getElementById("paxSitiz").addEventListener("input", paxSitiz);
    document.getElementById("paxBirth").addEventListener("input", paxBirth);
    document.getElementById("paxGender").addEventListener("input", paxGender);
    document.getElementById("paxExpDate").addEventListener("input", paxExpDate);
   

    function paxExpDate(e) {
      let finish = document.getElementById("paxExpDate1");
      finish.textContent = e.target.value.toUpperCase();
      let finish1 = document.getElementById("paxExpDate11");
      finish1.textContent = checkDate(e.target.value);
    }

    function paxGender(e) {
      let finish = document.getElementById("paxGender1");
      finish.textContent = e.target.value.toUpperCase();
      let finish1 = document.getElementById("paxGender11");
      finish1.textContent = e.target.value.toUpperCase();
    }

    function paxBirth(e) {
      let finish = document.getElementById("paxBirth1");
      finish.textContent = e.target.value.toUpperCase();
      let finish1 = document.getElementById("paxBirth11");
      finish1.textContent = e.target.value.toUpperCase();
    }

    function paxSitiz(e) {
      let finishFirst = document.getElementById("paxSitiz1");
      let finishSecond = document.getElementById("paxSitiz2");
      finishFirst.textContent = e.target.value.toUpperCase();
      finishSecond.textContent = e.target.value.toUpperCase();
      let finishFirst1 = document.getElementById("paxSitiz11");
      finishFirst1.textContent = e.target.value.toUpperCase();
      let finishSecond2 = document.getElementById("paxSitiz12");
      finishSecond2.textContent = e.target.value.toUpperCase();
    }

    function paxPasport(e) {
      let finish = document.getElementById("paxPasport1");
      finish.textContent = e.target.value.toUpperCase();
      let finish1 = document.getElementById("paxPasport11");
      finish1.textContent = e.target.value.toUpperCase();
    }

    function myFunction1(e) {
      let finish = document.getElementById("firstName1");
      finish.textContent = e.target.value.toUpperCase() + "/";
      let finish1 = document.getElementById("firstName11");
      finish.textContent = e.target.value.toUpperCase() + "/";
      finish1.textContent = e.target.value.toUpperCase();

    }

    function myFunction2(e) {
      let finish = document.getElementById("secondName2");
      let finish2 = document.getElementById("secondName22");
      finish.textContent = e.target.value.toUpperCase() + "/";
      finish2.textContent = e.target.value.toUpperCase() + "/";

    }

    function fullLIne() {
      // let line = document.getElementById("firstLine");
      // line.textContent = e.target.value.toUpperCase();
    }

    document.getElementById("flight22").addEventListener("input", getFlight);

    function getFlight(e) {
      let flight1 = document.getElementById("fini");
      let fer=e.target.value;
      let ter=fer.split(" ");
      let wer = ter.lenght;
      let outbound = checkCity(ter[4].slice(0,3));
      let inbound = checkCity(ter[4].slice(3,6));
      flight1.textContent=ter[0]+'  '+ter[2]+'  '+outbound+' - '+inbound+'   '+ter[ter.length - 2]+'  '+ter[ter.length - 1];
    }

    document.getElementById("flightgds").addEventListener("input", getGds);

    function getGds(e) {
      let flight1 = document.getElementById("gds");
      let fer=e.target.value;
      let ter=fer.split(" ");
      console.log(ter);
      let wer = ter.lenght;
      let outbound = checkCity(ter[ter.length - 11].slice(1,4));
      let inbound = checkCity(ter[ter.length - 9]);
      flight1.textContent=ter[0]+'  '+'  '+outbound+' - '+inbound+'   '+ter[ter.length - 5]+'  '+ter[ter.length - 1];
    }

    function checkCity(a) {
      let city = a.toUpperCase();
      switch (city){
      case "ODS":
        return '????????????';
        break;
        case "IEV":
        return '????????(????????????)';
        break;
        case "KBP":
          return '????????(??????????????????)';
          break;
          case "HRK":
            return '??????????????';
            break;
            case "DNK":
              return '??????????';
              break;
              case "LWO":
                return '??????????';
                break;
                case "IFO":
                  return '??????????-??????????????????';
                  break;
                  case "IST":
                    return '??????????????(??????????)';
                    break;
                    case "SAW":
                      return '??????????????(????????????)';
                      break;
                      case "FRA":
                        return '??????????????????';
                        break;
                        case "MUC":
                          return '????????????';
                          break;
                          case "BER":
                            return '????????????';
                            break;
                            case "JFK":
                              return '??????-????????(????????????)';
                              break;
                              case "BER":
                            return '????????????';
                            break;
                            case "LGW":
                            return '????????????(????????????)';
                            break;
                            case "LHR":
                            return '????????????(????????????)';
                            break;
                            case "LTN":
                            return '????????????(??????????)';
                            break;
                            case "TBS":
                            return '??????????????';
                            break;
                            case "DXB":
                              return '??????????';
                              break;
                              case "VIE":
                            return '????????';
                            break;
                            case "BUD":
                            return '????????????????';
                            break;
                            case "MSQ":
                            return '??????????';
                            break;
                            case "KUT":
                            return '??????????????';
                            break;
                            case "EVN":
                            return '????????????';
                            break;
                            case "ZRH":
                            return '??????????';
                            break;
                            case "WAW":
                            return '??????????????';
                            break;
                            case "CDG":
                            return '?????????? (??????????-????-????????)';
                            break;
                            case "OZH":
                            return '??????????????????';
                            break;
                            case "TLV":
                            return '????????-????????';
                            break;
                            case "MIA":
                            return '????????????';
                            break;
                             case "GZT":
                            return '??????????????????';
                            break;
                            case "VNO":
                            return '??????????????';
                            break;
                            case "YYZ":
                            return '??????????????';
                            break;
                            case "YVR":
                            return '????????????????';
                            break;
                            case "BUS":
                            return '????????????';
                            break;
                            case "BCN":
                            return '??????????????????';
                            break;
                            case "AYT":
                            return '??????????????';
                            break;
                            case "AMS":
                            return '??????????????????';
                            break;
                            case "PRG":
                            return '??????????';
                            break;
                            default:
                              return city;
    }
}