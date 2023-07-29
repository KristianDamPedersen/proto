// package: graph
// file: graph/v1/spec.proto

import * as jspb from "google-protobuf";

export class Graph extends jspb.Message {
  clearVerticesList(): void;
  getVerticesList(): Array<Vertice>;
  setVerticesList(value: Array<Vertice>): void;
  addVertices(value?: Vertice, index?: number): Vertice;

  clearEdgesList(): void;
  getEdgesList(): Array<Edge>;
  setEdgesList(value: Array<Edge>): void;
  addEdges(value?: Edge, index?: number): Edge;

  clearRoutesList(): void;
  getRoutesList(): Array<Route>;
  setRoutesList(value: Array<Route>): void;
  addRoutes(value?: Route, index?: number): Route;

  hasAdjacencymatrix(): boolean;
  clearAdjacencymatrix(): void;
  getAdjacencymatrix(): AdjacencyMatrix | undefined;
  setAdjacencymatrix(value?: AdjacencyMatrix): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Graph.AsObject;
  static toObject(includeInstance: boolean, msg: Graph): Graph.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Graph, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Graph;
  static deserializeBinaryFromReader(message: Graph, reader: jspb.BinaryReader): Graph;
}

export namespace Graph {
  export type AsObject = {
    verticesList: Array<Vertice.AsObject>,
    edgesList: Array<Edge.AsObject>,
    routesList: Array<Route.AsObject>,
    adjacencymatrix?: AdjacencyMatrix.AsObject,
  }
}

export class Vertice extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getLabel(): string;
  setLabel(value: string): void;

  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vertice.AsObject;
  static toObject(includeInstance: boolean, msg: Vertice): Vertice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Vertice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vertice;
  static deserializeBinaryFromReader(message: Vertice, reader: jspb.BinaryReader): Vertice;
}

export namespace Vertice {
  export type AsObject = {
    id: number,
    label: string,
    x: number,
    y: number,
  }
}

export class Edge extends jspb.Message {
  hasSource(): boolean;
  clearSource(): void;
  getSource(): Vertice | undefined;
  setSource(value?: Vertice): void;

  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): Vertice | undefined;
  setTarget(value?: Vertice): void;

  getWeight(): number;
  setWeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Edge.AsObject;
  static toObject(includeInstance: boolean, msg: Edge): Edge.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Edge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Edge;
  static deserializeBinaryFromReader(message: Edge, reader: jspb.BinaryReader): Edge;
}

export namespace Edge {
  export type AsObject = {
    source?: Vertice.AsObject,
    target?: Vertice.AsObject,
    weight: number,
  }
}

export class Route extends jspb.Message {
  clearVerticeList(): void;
  getVerticeList(): Array<Vertice>;
  setVerticeList(value: Array<Vertice>): void;
  addVertice(value?: Vertice, index?: number): Vertice;

  clearAccumulatedweightList(): void;
  getAccumulatedweightList(): Array<number>;
  setAccumulatedweightList(value: Array<number>): void;
  addAccumulatedweight(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Route.AsObject;
  static toObject(includeInstance: boolean, msg: Route): Route.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Route, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Route;
  static deserializeBinaryFromReader(message: Route, reader: jspb.BinaryReader): Route;
}

export namespace Route {
  export type AsObject = {
    verticeList: Array<Vertice.AsObject>,
    accumulatedweightList: Array<number>,
  }
}

export class AdjacencyMatrix extends jspb.Message {
  clearRowList(): void;
  getRowList(): Array<Row>;
  setRowList(value: Array<Row>): void;
  addRow(value?: Row, index?: number): Row;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdjacencyMatrix.AsObject;
  static toObject(includeInstance: boolean, msg: AdjacencyMatrix): AdjacencyMatrix.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdjacencyMatrix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdjacencyMatrix;
  static deserializeBinaryFromReader(message: AdjacencyMatrix, reader: jspb.BinaryReader): AdjacencyMatrix;
}

export namespace AdjacencyMatrix {
  export type AsObject = {
    rowList: Array<Row.AsObject>,
  }
}

export class Row extends jspb.Message {
  clearWeightList(): void;
  getWeightList(): Array<number>;
  setWeightList(value: Array<number>): void;
  addWeight(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Row.AsObject;
  static toObject(includeInstance: boolean, msg: Row): Row.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Row, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Row;
  static deserializeBinaryFromReader(message: Row, reader: jspb.BinaryReader): Row;
}

export namespace Row {
  export type AsObject = {
    weightList: Array<number>,
  }
}

