declare class CatmullRomSpline<T extends number | Vector2 | Vector3 | (Vector3 | BasePart)> {
	readonly tension: number;
	readonly points: T[];
	readonly Length: number[];
	readonly LengthIterations: number;
	readonly LengthIndices: [number, number, number | Vector2 | Vector3][];
	readonly ConnectedSplines: CatmullRomSpline<T>[];
	private _connections: Map<BasePart, RBXScriptConnection>;

	constructor(controlPoints?: T[], tension?: number);

	ChangeTension(tension: number): void;
	ChangeAllSplineTensions(tension: number): void;

	AddPoint(p: T, index?: number): void;

	RemovePoint(index: number): void;

	GetPoints(): number[] | Vector2[] | Vector3[];

	ConnectSpline(spline: CatmullRomSpline<T>): void;

	GetSplines(): CatmullRomSpline<T>[];
	GetSplineAt(t: number): LuaTuple<[CatmullRomSpline<T>, number]>;

	UpdateLength(): void;

	CalculatePositionAt(t: number): Vector2 | Vector3 | number;
	CalculatePositionRelativeToLength(t: number): Vector2 | Vector3 | number;

	CalculateDerivativeAt(t: number): Vector2 | Vector3 | number;
	CalculateDerivativeRelativeToLength(t: number): Vector2 | Vector3 | number;

	CreateTween<T extends Instance>(
		instance: T,
		tweenInfo: TweenInfo,
		propertyTable: ExtractKeys<T, Tweenable>[],
		relativeToSplineLength?: boolean,
	): Tween;
}

export = CatmullRomSpline;
