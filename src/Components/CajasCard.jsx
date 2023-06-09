import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useCarrito } from "../hooks/useCarrito";
import { CircularProgress } from "@mui/material";

export const CajasCard = ({ datos }) => {
  const { isLoading, setProductosInCarrito } = useCarrito();
  const { id, nombre, precio, chocolates } = datos;

  const data = {
    id: id,
    precio: precio,
    nombre: nombre,
    tipo: "caja",
  };

  const handleClickCarrito = () => {
    if (isLoading) return;
    setProductosInCarrito({ data });
  };

  return (
    <>
      <div className="border border-gray-200 rounded-lg  grid items-center max-w-[270px] gap-2 p-4 text-primary h-[420px]">
        <div className=" w-full max-w-[270px] aspect-square h-36 bg-gray-300 rounded-lg"></div>
        <h2 className="text-xl font-bold break-all">{nombre}</h2>
        <ul className="flex flex-col w-full text-sm font-light break-all font-SourceCodePro">
          {chocolates.map((chocolate, i) => {
            const { marca: marcaChocolates, cantidad } = chocolate;
            return (
              <li key={i} className="flex justify-between w-full">
                <span>{marcaChocolates}</span>
                <span>{cantidad}</span>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col self-end gap-4">
          <p className="self-start text-4xl font-bold tracking-wider font-Montserrat">
            ${precio}
          </p>
          <button
            className="w-full p-1 text-white rounded-full bg-primary"
            onClick={handleClickCarrito}
          >
            {isLoading ? (
              <CircularProgress
                size={20}
                sx={{
                  color: "#fff",
                }}
              />
            ) : (
              <AddShoppingCartOutlinedIcon className="text-white" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};
