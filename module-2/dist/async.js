var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    const getTodo = () => __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = yield response.json();
        console.log(data);
        return data;
    });
    getTodo();
    const createPromise = () => {
        return new Promise((resolve, reject) => {
            const data = {
                data: "Next Level Web Development",
            };
            if (data) {
                resolve(data);
            }
            else {
                reject("Data is not available");
            }
        });
    };
    //calling CreatePromise function
    const showData = () => __awaiter(this, void 0, void 0, function* () {
        const data = yield createPromise();
        return data;
        // console.log(data);
    });
    showData();
}