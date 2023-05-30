"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const design_system_1 = require("@adminjs/design-system");
const adminjs_1 = require("adminjs");
function Dashboard() {
    const [resources, setResources] = (0, react_1.useState)();
    const [currentAdmin] = (0, adminjs_1.useCurrentAdmin)();
    const api = new adminjs_1.ApiClient();
    (0, react_1.useEffect)(() => {
        fetchDashboardData();
    }, []);
    function fetchDashboardData() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield api.getDashboard();
            setResources(res.data);
        });
    }
    return (react_1.default.createElement("section", { style: { padding: '1.5rem' } },
        react_1.default.createElement(design_system_1.H1, null,
            "Seja bem-vindo(a), ", currentAdmin === null || currentAdmin === void 0 ? void 0 :
            currentAdmin.firstName),
        react_1.default.createElement("section", { style: { backgroundColor: '#FFF', padding: '1.5rem' } },
            react_1.default.createElement(design_system_1.H2, null, "Resumo"),
            react_1.default.createElement(design_system_1.Table, null,
                react_1.default.createElement(design_system_1.TableHead, null,
                    react_1.default.createElement(design_system_1.TableRow, { style: { backgroundColor: '#FF0043' } },
                        react_1.default.createElement(design_system_1.TableCell, { style: { color: "#FFF" } }, "Recurso"),
                        react_1.default.createElement(design_system_1.TableCell, { style: { color: "#FFF" } }, "Registros"))),
                react_1.default.createElement(design_system_1.TableBody, null, resources ?
                    Object.entries(resources).map(([resource, count]) => (react_1.default.createElement(design_system_1.TableRow, { key: resource },
                        react_1.default.createElement(design_system_1.TableCell, null, resource),
                        react_1.default.createElement(design_system_1.TableCell, null, count))))
                    :
                        react_1.default.createElement(react_1.default.Fragment, null))))));
}
exports.default = Dashboard;
