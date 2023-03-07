import DestinosList from "./DestinoList";
import destino from "@/data/destinos";
import styled from "styled-components";

function IndexPage() {
    return (
      <div>
        <h1>Destinos de Sergio y Javier </h1>
        <DestinosList destinos={destino} />
      </div>
    );
  }