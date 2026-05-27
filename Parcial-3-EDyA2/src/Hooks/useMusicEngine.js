import { useState, useEffect, useRef, useCallback } from "react";

import Trie from "../EstructurasDeDatos/Trie";
import MaxHeap from "../EstructurasDeDatos/MaxHeap";
import Grafo from "../EstructurasDeDatos/Graph";

import CANCIONES from "../Data/Canciones";
import ARISTAS from "../Data/DatosGrafo";
import {
    MAX_SUGERENCIAS,
    MAX_RECOMENDACIONES,
    PROFUNDIDAD_BFS,
    TOP_N_CANCIONES,
} from "../Data/Constantes";

const useMusicEngine = () => {

    const trieRef = useRef(null);
    const heapRef = useRef(null);
    const grafoRef = useRef(null);

    const [listo, setListo] = useState(false);
    const [sugerencias, setSugerencias] = useState([]);
    const [ranking, setRanking] = useState([]);
    const [recomendaciones, setRecomendaciones] = useState([]);
    const [cancionActiva, setCancionActiva] = useState(null);
    const [textoBusqueda, setTextoBusqueda] = useState("");

    useEffect(() => {
        const trie = new Trie();
        const heap = new MaxHeap();
        const grafo = new Grafo();

        CANCIONES.forEach((cancion) => {
            trie.insertar(cancion);
            heap.insertar(cancion);
            grafo.agregarNodo(cancion);
        });

        ARISTAS.forEach(([idA, idB]) => {
            grafo.agregarArista(idA, idB);
        });

        trieRef.current = trie;
        heapRef.current = heap;
        grafoRef.current = grafo;

        setRanking(heap.topN(TOP_N_CANCIONES));

        setListo(true);
    }, []);

    const buscar = useCallback((prefijo) => {
        setTextoBusqueda(prefijo);

        if (!trieRef.current || prefijo.trim() === "") {
            setSugerencias([]);
            return;
        }

        const resultados = trieRef.current.sugerir(prefijo, MAX_SUGERENCIAS);
        setSugerencias(resultados);
    }, []);

    const buscarExacto = useCallback((titulo) => {
        if (!trieRef.current) return null;
        return trieRef.current.buscar(titulo);
    }, []);

    const seleccionarCancion = useCallback((cancion) => {
        setCancionActiva(cancion);
        setTextoBusqueda(cancion.titulo);
        setSugerencias([]);

        if (!grafoRef.current) return;

        const recs = grafoRef.current.obtenerRecomendaciones(
            cancion.id,
            MAX_RECOMENDACIONES,
            PROFUNDIDAD_BFS
        );
        setRecomendaciones(recs);
    }, []);

    const reproducir = useCallback((cancion) => {
        if (!heapRef.current) return;

        heapRef.current.actualizarReproducciones(cancion.id, 1);
        setRanking(heapRef.current.topN(TOP_N_CANCIONES));
        seleccionarCancion(cancion);
    }, [seleccionarCancion]);

    const limpiarBusqueda = useCallback(() => {
        setTextoBusqueda("");
        setSugerencias([]);
    }, []);

    const limpiarSeleccion = useCallback(() => {
        setCancionActiva(null);
        setRecomendaciones([]);
        limpiarBusqueda();
    }, [limpiarBusqueda]);

    return {
        listo,
        textoBusqueda,
        sugerencias,
        ranking,
        recomendaciones,
        cancionActiva,

        buscar,
        buscarExacto,
        seleccionarCancion,
        reproducir,
        limpiarBusqueda,
        limpiarSeleccion,

        trie: trieRef,
        heap: heapRef,
        grafo: grafoRef,
    };
};

export default useMusicEngine;