interface CanvasProp
{
  parent?: Element;
}

export class Canvas
{
  parent?: Element;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  constructor (props?: CanvasProp)
  {
    this.canvas = document.createElement("canvas");
    if (props?.parent)
    {
      this.parent = props.parent;
      this.parent.appendChild(this.canvas);
    }
    if (!this.canvas)
    {
      throw "Canvas not supported!";
    }
    const context = this.canvas.getContext("2d");
    if (!context)
    {
      throw "Canvas does not support 2D Context";
    }
    this.context = context;
  }
}