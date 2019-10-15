class PetsController < ApplicationController
  
  def index
    @pets = Pet.all
  end

  def show
    @pet = Pet.find(params[:id])
  end

  def new
    @pet = Pet.new
  end

  def edit
    @pet = Pet.find(params[:id])
  end

  def create
    # Create the new instance of pet.
    @pet = Pet.create(pet_params)
    # If the pet is valid, redirect to the index.
    if @pet.valid?
      redirect_to pets_path
    # Otherwise, render the form again so that we can show the users the validation errors.
    else
      render :new
    end
  end

  def update
    @pet = Pet.find(params[:id])
    # Update pet here
    @pet.update(pet_params)
    redirect_to pet_path(@pet.id)
  end

  def destroy
    Pet.destroy(params[:id])
    redirect_to pets_path
  end

  private

  def pet_params
    params.require(:pet).permit(:name, :age, :user_id)
  end

end
