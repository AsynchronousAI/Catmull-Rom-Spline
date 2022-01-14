# Catmull-Rom-Spline-Module
The module that makes it easy to create [Catmull-Rom Splines](https://www.cs.cmu.edu/~fp/courses/graphics/asst5/catmullRom.pdf) on Roblox.

## Usage
The Catmull-Rom Spline constructor takes in 2 arguments:
1. `points` a table consisting of numbers, Vector2s, or Vector3s and/or BaseParts.
2. `tension` [optional]: a number, usually in [0, 1] that visually changes the curve made. If left as nil, tension will default to 0.5.
```lua
CatmullRomSpline.new(points: {number} | {Vector2} | {Vector3 | BasePart}, tension: number?)
```

## API
```lua
CatmullRomSplineObject:ChangeTension(tension: number)
```
