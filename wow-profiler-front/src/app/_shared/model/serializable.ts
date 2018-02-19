/**
 * Created by Valentin on 31/03/2017.
 */
interface Serializable<T> {
  deserialize(input): T;
}
