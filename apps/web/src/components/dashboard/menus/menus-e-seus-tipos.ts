import { Move3D, PlaneIcon, Settings, Truck, Anvil } from "lucide-react";

type IconType = React.FC<React.SVGProps<SVGSVGElement>>;

export type LoggedUser = {
  id: string;
  name: string;
  email: string;
};

export type Menu = {
  nome: string;
  path: string;
  icon?: IconType;
  subMenu: boolean;
  isActive?: boolean;
  subMenuItems?: Menu[];
};

export type MenusTodos = {
  loggedUser?: LoggedUser;
  Qualidade: Menu;
  Planeamento: Menu;
  Modelistas: Menu;
  Embarques: Menu;
  Administrador: Menu;
};

export const MenusExistentes: MenusTodos = {
  Qualidade: {
    nome: "Qualidade",
    path: "/dashboard/qualidade",
    icon: Settings,
    subMenu: true,
    subMenuItems: [
      {
        nome: "Balanço M.",
        path: "/dashboard/qualidade/balancom",
        subMenu: false,
      },
      {
        nome: "Tc...",
        path: "/dashboard/qualidade/tc",
        subMenu: false,
      },
    ],
  },
  Planeamento: {
    nome: "Planeamento",
    path: "/dashboard/planeamento",
    icon: PlaneIcon,
    subMenu: true,
    subMenuItems: [
      {
        nome: "N. Planeamento",
        path: "/dashboard/planeamento/novoplaneamento",
        icon: PlaneIcon,
        subMenu: false,
      },
      {
        nome: "Fornecedores",
        path: "/dashboard/planeamento/fornecedores",
        icon: PlaneIcon,
        subMenu: false,
      },
    ],
  },
  Modelistas: {
    nome: "Modelistas",
    path: "/dashboard/modelistas",
    icon: Move3D,
    subMenu: false,
  },
  Embarques: {
    nome: "Embarques",
    path: "/dashboard/embarques",
    icon: Truck,
    subMenu: true,
    subMenuItems: [
      {
        nome: "N. Embarque",
        path: "/dashboard/embarques/novo",
        icon: PlaneIcon,
        subMenu: false,
      },
      {
        nome: "Configurações",
        path: "/dashboard/embarques/configurar",
        icon: PlaneIcon,
        subMenu: false,
      },
    ],
  },
  Administrador: {
    nome: "Administrador",
    path: "/dashboard/administrador",
    icon: Anvil,
    subMenu: false,
  },
};
