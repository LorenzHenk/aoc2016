import { CoordinateSystem } from "./coordinate_system";
import { Distance, toDistance } from "./distance";
import { Rotation, toRotation } from "./rotation";

export interface RotationTask {
  rotation: Rotation;
}

export interface MovementTask {
  distance: Distance;
}

export type Task = RotationTask | MovementTask;

export function isRotationTask(task: Task): task is RotationTask {
  return "rotation" in task;
}

export function isMovementTask(task: Task): task is MovementTask {
  return "distance" in task;
}

export function parseTask(task: string) {
  const rawRotation = task.slice(0, 1);
  const rawDistance = task.slice(1);

  const rotation = toRotation(rawRotation);
  const distance = toDistance(rawDistance);

  return [{ rotation } as RotationTask, { distance } as MovementTask];
}

export function parseTasks(tasks: string, separator: string = ", "): Task[] {
  return tasks
    .split(separator)
    .reduce(
      (previous, current) => [...previous, ...parseTask(current)],
      [] as Task[],
    );
}

export class Wrapper {
  private system: CoordinateSystem;

  constructor(system: CoordinateSystem) {
    this.system = system;
  }

  public run(tasks: string) {
    this.runTasks(parseTasks(tasks));
  }

  public runTasks(tasks: Task[]) {
    tasks.forEach(task => {
      if (isMovementTask(task)) {
        this.system.move(task.distance);
      } else {
        this.system.turn(task.rotation);
      }
    });
  }
}
